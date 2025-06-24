using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Memoria2024.Models
{
        public class Contenido
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdContenido { get; set; }

        [ForeignKey("Seccion")]
        public int IdSeccion { get; set; }

        public Seccion? Seccion { get; set; }

        [MaxLength(255)]
        public string? Titulo { get; set; }

        public string? Texto { get; set; }

        public DateTime FechaPublicacion { get; set; }
    }

}