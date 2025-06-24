using Memoria2024.Models;

namespace Memoria2024.Services
{
    public interface ISeccionService
    {
        Task<IEnumerable<Seccion>> GetAllAsync();
        Task<Seccion?> GetByIdAsync(int id);
        Task<Seccion> CreateAsync(Seccion seccion);
        Task<bool> UpdateAsync(int id, Seccion seccion);
        Task<bool> DeleteAsync(int id);
    }
}
