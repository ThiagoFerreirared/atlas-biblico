export const coberturaGenesis = [
  {aula:6,capitulo:1,de:1,ate:1,faixa:'1:1',tema:'Introdução a Gênesis e ao primeiro versículo'},
  {aula:7,capitulo:1,de:1,ate:3,faixa:'1:1–3',tema:'O princípio e a luz'},
  {aula:8,capitulo:1,de:4,ate:5,faixa:'1:4–5',tema:'Dia e noite'},
  {aula:9,capitulo:1,de:6,ate:8,faixa:'1:6–8',tema:'O firmamento'},
  {aula:10,capitulo:1,de:9,ate:13,faixa:'1:9–13',tema:'Terra e vegetação'},
  {aula:11,capitulo:1,de:14,ate:19,faixa:'1:14–19',tema:'Os luminares'},
  {aula:12,capitulo:1,de:20,ate:23,faixa:'1:20–23',tema:'Animais aquáticos e aves'},
  {aula:13,capitulo:1,de:24,ate:25,faixa:'1:24–25',tema:'Animais terrestres'},
  {aula:14,capitulo:1,de:26,ate:27,faixa:'1:26–27',tema:'Imagem e semelhança'},
  {aula:15,capitulo:1,de:28,ate:31,faixa:'1:28–31',tema:'Missão, alimento e bondade'},
  {aula:16,capitulo:2,de:1,ate:3,faixa:'2:1–3',tema:'O sétimo dia'},
  {aula:17,capitulo:2,de:4,ate:7,faixa:'2:4–7',tema:'Pó, fôlego e alma'},
  {aula:18,capitulo:2,de:8,ate:14,faixa:'2:8–14',tema:'O jardim do Éden'},
  {aula:19,capitulo:2,de:15,ate:17,faixa:'2:15–17',tema:'Cultivar, guardar e obedecer'},
  {aula:20,capitulo:2,de:18,ate:20,faixa:'2:18–20',tema:'A ajudadora correspondente'},
  {aula:21,capitulo:2,de:21,ate:25,faixa:'2:21–25',tema:'A mulher e uma só carne'},
  {aula:22,capitulo:3,de:1,ate:5,faixa:'3:1–5',tema:'A serpente e o engano'},
  {aula:23,capitulo:3,de:6,ate:7,faixa:'3:6–7',tema:'A desobediência'},
  {aula:24,capitulo:3,de:8,ate:13,faixa:'3:8–13',tema:'Medo e responsabilidade'},
  {aula:25,capitulo:3,de:14,ate:15,faixa:'3:14–15',tema:'A serpente e o protoevangelho'}
];
export const aulasDoCapitulo=(numero)=>coberturaGenesis.filter(x=>x.capitulo===Number(numero));
