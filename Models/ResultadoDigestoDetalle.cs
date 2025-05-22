using System;
using System.Text.Json.Serialization;

namespace Memoria2024.Models
{
    public class ResultadoDigestoDetalle
    {
        [JsonPropertyName("digId")]
        public int DigId { get; set; }

        [JsonPropertyName("tipNorNombre")]
        public string? TipNorNombre { get; set; }

        [JsonPropertyName("digNumero")]
        public string? DigNumero { get; set; }

        [JsonPropertyName("entRazonSocial")]
        public string? EntRazonSocial { get; set; }

        [JsonPropertyName("tipNorId")]
        public int TipNorId { get; set; }

        [JsonPropertyName("entId")]
        public int EntId { get; set; }

        [JsonPropertyName("digFEmision")]
        public DateTime? DigFEmision { get; set; }

        [JsonPropertyName("digFPublicacion")]
        public DateTime? DigFPublicacion { get; set; }

        [JsonPropertyName("digFVigencia")]
        public DateTime? DigFVigencia { get; set; }

        [JsonPropertyName("digExtracto")]
        public string? DigExtracto { get; set; }

        [JsonPropertyName("aplDigNombre")]
        public string? AplDigNombre { get; set; }

        [JsonPropertyName("digModificada")]
        public bool DigModificada { get; set; }

        [JsonPropertyName("digDerogada")]
        public bool DigDerogada { get; set; }

        [JsonPropertyName("digSeleccion")]
        public bool DigSeleccion { get; set; }

        [JsonPropertyName("digInternet")]
        public bool DigInternet { get; set; }

        [JsonPropertyName("arcDigNombre")]
        public string? ArcDigNombre { get; set; }

        [JsonPropertyName("secNombre")]
        public string? SecNombre { get; set; }
    }
}