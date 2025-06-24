using Memoria2024.Models;

namespace Memoria2024.Services
{
    public interface IContenidoService
    {
        Task<List<Contenido>> GetAllAsync();
        Task<Contenido?> GetByIdAsync(int id);
        Task<Contenido> CreateAsync(Contenido contenido);
        Task<bool> UpdateAsync(int id, Contenido contenido);
        Task<bool> DeleteAsync(int id);
    }
}