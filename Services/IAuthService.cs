namespace Memoria2024.Services
{
    public interface IAuthService
    {
        Task<string?> LoginAsync(string username, string password);
    }
}