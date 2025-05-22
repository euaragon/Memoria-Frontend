
using Memoria2024.Models;

namespace Memoria2024.Services
{
    public interface IFallosService
    {
        Task<List<ResultadoDigestoCabecera>> GetCabeceraFallos2024();
        Task<List<ResultadoDigestoDetalle>> GetDetalleFallo(int? nroFallo);
        Task DescargarPdf(int digId);
        Task CuadroFallos();
        Task<List<CantidadFallosPorSectorUnificadoDTO>> GetCantidadFallosPorSectorUnificado2024(); // Asegúrate de tener este DTO
    }
}