
//Program.cs del Front

using BlazorStrap;
using Memoria_2023;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Net.Http.Json;


var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");


// Cliente temporal para traer la config
using var tempClient = new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) };

// Esperar que se traiga la config del backend
var configResponse = await tempClient.GetFromJsonAsync<ConfiguracionDto>("https://192.168.237.187:7030/api/configuracion");


// Crear el HttpClient real apuntando a la API
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(configResponse.BaseUrl) });

builder.Services.AddBlazorStrap();
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);


await builder.Build().RunAsync();

public class ConfiguracionDto
{
    public string BaseUrl { get; set; }
}