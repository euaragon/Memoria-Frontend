using System.Net.Http.Json;
using Memoria2024.Models;

namespace Memoria2024.Services
{
    public class SeccionService : ISeccionService
    {
         private readonly HttpClient _http;

        public SeccionService(HttpClient http)
        {
            _http = http;
        }

        public async Task<IEnumerable<Seccion>> GetAllAsync()
            => await _http.GetFromJsonAsync<List<Seccion>>("Seccion") ?? new();

        public async Task<Seccion?> GetByIdAsync(int id)
            => await _http.GetFromJsonAsync<Seccion>($"Seccion/{id}");

        public async Task<Seccion> CreateAsync(Seccion Seccion)
        {
            var res = await _http.PostAsJsonAsync("Seccion", Seccion);
            return await res.Content.ReadFromJsonAsync<Seccion>() 
                   ?? throw new Exception("Error al crear Seccion");
        }

        public async Task<bool> UpdateAsync(int id, Seccion Seccion)
        {
            var res = await _http.PutAsJsonAsync($"Seccion/{id}", Seccion);
            return res.IsSuccessStatusCode;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var res = await _http.DeleteAsync($"Seccion/{id}");
            return res.IsSuccessStatusCode;
        }

       
    }
}
