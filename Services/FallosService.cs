using System.Text.Json;
using Microsoft.JSInterop;
using Memoria2024.Models;

namespace Memoria2024.Services
{
    public class FallosService : IFallosService
    {
        private readonly HttpClient _http;
        private readonly IJSRuntime _js;

        public FallosService(HttpClient http, IJSRuntime js)
        {
            _http = http;
            _js = js;
        }

        public async Task<List<ResultadoDigestoCabecera>> GetCabeceraFallos2024()
        {
            var response = await _http.GetAsync("fallos2024/todos");
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var opciones = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                return JsonSerializer.Deserialize<List<ResultadoDigestoCabecera>>(content, opciones) ?? new List<ResultadoDigestoCabecera>();
            }
            else
            {
                Console.WriteLine($"Error al cargar cabecera de fallos: {response.StatusCode}");
                return new List<ResultadoDigestoCabecera>();
            }
        }

        public async Task<List<ResultadoDigestoDetalle>> GetDetalleFallo(int? nroFallo)
        {
            if (nroFallo == null) return new List<ResultadoDigestoDetalle>();

            var response = await _http.GetAsync($"buscar?DigNumeroDesde={nroFallo}");
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var opciones = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                return JsonSerializer.Deserialize<List<ResultadoDigestoDetalle>>(content, opciones) ?? new List<ResultadoDigestoDetalle>();
            }
            else
            {
                Console.WriteLine($"Error al obtener detalle del fallo {nroFallo}: {response.StatusCode}");
                return new List<ResultadoDigestoDetalle>();
            }
        }

        public async Task DescargarPdf(int digId)
        {
            var pdfUrl = new Uri(_http.BaseAddress!, $"Fallos/pdf/{digId}").ToString();
            await _js.InvokeVoidAsync("abrirPdf", pdfUrl);
        }

        public async Task CuadroFallos()
        {
            await _js.InvokeVoidAsync("cuadroFallosCuentas");
        }

        public async Task<List<CantidadFallosPorSectorUnificadoDTO>> GetCantidadFallosPorSectorUnificado2024()
        {
            var response = await _http.GetAsync("fallos2024/cantidad-por-sector");
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var opciones = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                return JsonSerializer.Deserialize<List<CantidadFallosPorSectorUnificadoDTO>>(content, opciones) ?? new List<CantidadFallosPorSectorUnificadoDTO>();
            }
            else
            {
                Console.WriteLine($"Error al obtener cantidades por sector: {response.StatusCode}");
                return new List<CantidadFallosPorSectorUnificadoDTO>();
            }
        }
    }

}