using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Memoria2024.Models
{
        public class Seccion
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdSeccion { get; set; }

        [ForeignKey("Pagina")]
        public int IdPagina { get; set; }

        public Pagina? Pagina { get; set; }

        [Required]
        [MaxLength(255)]
        public string? Nombre { get; set; }

        [Required]
        [MaxLength(255)]
        public string? Url { get; set; }

        public int Orden { get; set; }
    }
}