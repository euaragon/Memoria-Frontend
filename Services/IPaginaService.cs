using Memoria2024.Models;

namespace Memoria2024.Services
{
    public interface IPaginaService
    {
        Task<IEnumerable<Pagina>> GetAllAsync();
        Task<Pagina?> GetByIdAsync(int id);
        Task<Pagina> CreateAsync(Pagina pagina);
        Task<bool> UpdateAsync(int id, Pagina pagina);
        Task<bool> DeleteAsync(int id);
    }
}
