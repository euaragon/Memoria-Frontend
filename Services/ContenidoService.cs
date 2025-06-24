using System.Net.Http.Json;
using Memoria2024.Models;

namespace Memoria2024.Services
{
    public class ContenidoService : IContenidoService
    {
        private readonly HttpClient _http;

        public ContenidoService(HttpClient http)
        {
            _http = http;
        }

        public async Task<List<Contenido>> GetAllAsync()
            => await _http.GetFromJsonAsync<List<Contenido>>("Contenido") ?? new();

        public async Task<Contenido?> GetByIdAsync(int id)
            => await _http.GetFromJsonAsync<Contenido>($"Contenido/{id}");

        public async Task<Contenido> CreateAsync(Contenido contenido)
        {
            var res = await _http.PostAsJsonAsync("Contenido", contenido);
            return await res.Content.ReadFromJsonAsync<Contenido>() 
                   ?? throw new Exception("Error al crear contenido");
        }

        public async Task<bool> UpdateAsync(int id, Contenido contenido)
        {
            var res = await _http.PutAsJsonAsync($"Contenido/{id}", contenido);
            return res.IsSuccessStatusCode;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var res = await _http.DeleteAsync($"Contenido/{id}");
            return res.IsSuccessStatusCode;
        }
    }
}
