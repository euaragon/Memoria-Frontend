namespace Memoria2024.Models
{
     public class LoginRequest
    {
        public string NombreUsuario { get; set; } = string.Empty;
        public string Contraseña { get; set; } = string.Empty;
    }

    public class TokenResponse
    {
        public string Token { get; set; } = string.Empty;
    }
}