using System.Net.Http.Json;
using Memoria2024.Models;

namespace Memoria2024.Services
{
    public class PaginaService : IPaginaService
    {
         private readonly HttpClient _http;

        public PaginaService(HttpClient http)
        {
            _http = http;
        }

        public async Task<IEnumerable<Pagina>> GetAllAsync()
            => await _http.GetFromJsonAsync<List<Pagina>>("Pagina") ?? new();

        public async Task<Pagina?> GetByIdAsync(int id)
            => await _http.GetFromJsonAsync<Pagina>($"Pagina/{id}");

        public async Task<Pagina> CreateAsync(Pagina Pagina)
        {
            var res = await _http.PostAsJsonAsync("Pagina", Pagina);
            return await res.Content.ReadFromJsonAsync<Pagina>() 
                   ?? throw new Exception("Error al crear Pagina");
        }

        public async Task<bool> UpdateAsync(int id, Pagina Pagina)
        {
            var res = await _http.PutAsJsonAsync($"Pagina/{id}", Pagina);
            return res.IsSuccessStatusCode;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var res = await _http.DeleteAsync($"Pagina/{id}");
            return res.IsSuccessStatusCode;
        }

       
    }
}
