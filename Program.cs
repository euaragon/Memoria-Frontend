using BlazorStrap;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Net.Http.Json;
using Memoria2024.Services;
using Microsoft.AspNetCore.Components;
using Memoria_2023;


var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");


// Cliente temporal para traer la config
using var tempClient = new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) };

// Esperar que se traiga la config del backend
var configResponse = await tempClient.GetFromJsonAsync<ConfiguracionDto>("/MemoriaAPI/api/Configuracion");


builder.Services.AddScoped(sp =>
{
    return new HttpClient { BaseAddress = new Uri(configResponse!.BaseUrl) };
});


builder.Services.AddScoped<IFallosService, FallosService>();

builder.Services.AddBlazorStrap();
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);



await builder.Build().RunAsync();

public class ConfiguracionDto
{
    public string BaseUrl { get; set; }
}
