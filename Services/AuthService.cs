using System.Net.Http.Json;
using Memoria2024.Models;

namespace Memoria2024.Services
{
    public class AuthService : IAuthService
    {
        private readonly HttpClient _http;

        public AuthService(HttpClient http)
        {
            _http = http;
        }

        public async Task<string?> LoginAsync(string username, string password)
        {
            var response = await _http.PostAsJsonAsync("api/auth/login", new LoginRequest
            {
                NombreUsuario = username,
                Contraseña = password
            });

            if (!response.IsSuccessStatusCode)
                return null;

            var result = await response.Content.ReadFromJsonAsync<TokenResponse>();
            return result?.Token;
        }
    }
}
