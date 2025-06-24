using BlazorStrap;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Net.Http.Json;
using Memoria2024.Services;
using Memoria2024.Models;
using Memoria_2023;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

// Leer configuración desde el archivo appsettings.json en wwwroot
using var tempClient = new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) };
var appSettings = await tempClient.GetFromJsonAsync<AppSettings>("appsettings.json");

// Registrar AppSettings como singleton
builder.Services.AddSingleton(appSettings!);

// Registrar HttpClient con base en la URL de la API
builder.Services.AddScoped(sp => new HttpClient
{
    BaseAddress = new Uri(appSettings!.ApiBaseUrl)
});

// Registrar tus servicios
builder.Services.AddScoped<IFallosService, FallosService>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IContenidoService, ContenidoService>();


builder.Services.AddBlazorStrap();

await builder.Build().RunAsync();
