# Direção de design — app médico familiar (Lucas / Medical Project)

Documento de produto e design para o PHR pessoal da família. Inspiração de domínio: [MediKeep](https://github.com/afairgiant/MediKeep). UI/UX própria — não reutilizar o visual atual do MediKeep.

**Idioma da interface e dos entregáveis:** português (Brasil).  
**Data:** 2026-10-29.

---

## 1. Nome do produto

| Opção | Tom | Por quê |
|-------|-----|---------|
| **Cuidário** (recomendado) | Íntimo, memorável | Cruza *cuidar* + *diário*: arquivo vivo de cuidados da casa, não painel clínico. Soa brasileiro e humano. |
| **SaúdeLar** | Direto, familiar | Nome transparente: saúde do lar. Mais descritivo, menos marca própria. |
| **Núcleo** | Calmo, curto | “Núcleo de saúde da família” — hub, sem cheiro de hospital. Pode precisar de subtítulo. |

**Recomendação:** **Cuidário**. Subtítulo opcional na home: *Saúde da família, no seu ritmo.*

---

## 2. Direção visual

### 2.1 Atmosfera

Um **arquivo doméstico calmo** — pasta bem organizada da família em casa, não dashboard de clínica nem landing genérica de SaaS médico.

- Luz: manhã suave, fundo com névoa esverdeada e textura leve (papel granulado ou gradiente radial discreto), nunca branco hospitalar puro nem flat único.
- Humor: confiança quieta, acolhimento, clareza. Zero urgência visual no estado padrão; alertas só quando o dado exige.
- Âncora visual: rostos/iniciais dos membros da família e objetos reais de cuidado (carteirinha, frasco, laudo) — não ícones médicos genéricos em grade nem colagem de cards.
- Anti-padrões (evitar de propósito): gradientes roxo→índigo; roxo sobre branco; cream `#F4F1EA` + serif alto contraste + terracota; layout “jornal” com filetes e colunas densas; dark mode como default; pills arredondadas em cluster; glow; emoji decorativo; hero com stats/chips flutuantes.

### 2.2 Tipografia

| Papel | Direção | Exemplos de família |
|-------|---------|---------------------|
| Display / marca | Serif óptica suave, amigável (não jornalística) | **Fraunces** ou **Literata** |
| UI / corpo | Sans geométrica limpa, boa em densidades médicas | **Outfit** ou **Manrope** |
| Dados densos (doses, datas, carteirinha) | Tabular nums; sans da UI em peso regular/medium | mesma família do corpo |

Hierarquia: marca/nome do membro em destaque; um título de tela; um subtítulo curto; depois lista/conteúdo. Evitar Inter, Roboto, Arial e system stack como face principal.

### 2.3 Sistema de cor (CSS variables)

Tema claro como default (privacidade + leitura prolongada). Verde eucalipto + tinta carvão + névoa — sem azul “hospital” dominante e sem roxo.

```css
:root {
  /* Superfícies */
  --bg: #f3f6f4;              /* névoa sage-tinted */
  --bg-elevated: #fafcfb;
  --bg-muted: #e7eee9;
  --bg-accent-soft: #dce8e2;  /* destaque de seção, não card-shadow */

  /* Texto */
  --ink: #1a2420;             /* carvão esverdeado */
  --ink-secondary: #4a5c54;
  --ink-tertiary: #6b7c74;

  /* Marca / ação */
  --brand: #2f5d50;           /* eucalipto profundo */
  --brand-hover: #264a41;
  --brand-soft: #c5d9d0;

  /* Acento (raro: CTA secundário, data próxima) */
  --accent: #c45c3a;          /* terracota só em acento pontual — não como tema cream+terracotta */
  --accent-soft: #f3e0d8;

  /* Feedback */
  --ok: #2f6b4f;
  --warn: #b7791f;
  --danger: #a33b3b;
  --info: #3d6a7a;            /* teal só para info, não como cor-mãe */

  /* Linhas / foco */
  --border: #cfdad3;
  --focus-ring: #2f5d50;

  /* Privacidade / modo discreto */
  --privacy-veil: rgba(26, 36, 32, 0.06);
}
```

Uso: fundos com gradiente sutil (`--bg` → `--bg-muted`) ou textura SVG noise a 3–5% opacidade. Superfícies elevadas sem sombra multicamada — preferir contraste de tom e espaço.

### 2.4 Movimento

Princípios: presença e hierarquia, não ornamentação.

1. **Entrada de tela:** fade + leve rise (12–16px, 280–360ms, ease-out) no bloco principal — uma vez por navegação.
2. **Troca de membro da família:** crossfade do conteúdo + micro-highlight no avatar/chip ativo (sem slideshow).
3. **Listas médicas:** stagger curto (máx. 4–6 itens visíveis) ao carregar; cancelar se `prefers-reduced-motion`.
4. Evitar: parallax, confetti, loaders elaborados, animações em loops decorativos.

---

## 3. Arquitetura de informação

### 3.1 Navegação primária

**Desktop:** rail lateral estreito (ícone + label) ou top nav com 5–6 destinos + switcher de membro sempre visível.

**Mobile:** bottom nav com 4 destinos + “Mais”; switcher de membro no topo sticky.

| Destino | Papel |
|---------|--------|
| **Início** | Hub da família (hoje / próximos / alertas calmos) |
| **Medicamentos** | Em uso, doses, estoque simples |
| **Consultas** | Agenda e histórico de visitas |
| **Exames** | Labs, laudos, anexos |
| **Plano** | Plano de saúde BR (carteirinha, coberturas, guias) |
| **Mais** | Perfis, alergias/condições, documentos gerais, privacidade, export |

Histórico clínico estruturado (alergias, condições, vacinas, procedimentos) mora no **overview do membro** e em “Mais”, não como item igual aos cinco acima — reduz ruído no dia a dia.

### 3.2 Switcher de membro da família

Componente global, persistente:

- Avatar/iniciais + primeiro nome.
- Lista do núcleo (ex.: Lucas, cônjuge, filhos, pais sob cuidado).
- Indicador discreto de “contexto ativo” (nome na barra + tom `--brand-soft` no avatar).
- Ação “Gerenciar família” no rodapé do switcher.
- Regra: **todo dado clínico é sempre no contexto de um membro**; a home familiar agrega só resumos, nunca mistura fichas.

### 3.3 Telas-chave (mapa)

```
Início (hub familiar)
 └─ Member overview (membro ativo)
     ├─ Medicamentos
     ├─ Consultas / visitas
     ├─ Exames & documentos
     ├─ Plano de saúde
     └─ Perfil clínico (alergias, condições, vacinas, vitais)
Família (membros, papéis, compartilhamento interno)
Privacidade & dados (bloqueio, export, exclusão)
```

---

## 4. Princípios de UX (dados médicos pessoais)

1. **Calma primeiro** — tela padrão sem semáforo; urgência só com copy e cor de feedback, nunca com o layout inteiro “em alerta”.
2. **Hierarquia clara** — uma pergunta por tela: *o que importa hoje para [membro]?* Depois o arquivo.
3. **Baixa carga cognitiva** — preferir listas cronológicas e filtros simples (Ativo / Arquivo; Próximos / Passados) a dashboards com muitos KPIs.
4. **Contexto de pessoa sempre visível** — nunca editar medicação sem saber de quem.
5. **Privacidade perceptível** — lock opcional ao abrir o app; máscara de dados sensíveis na home compartilhada da TV/tablet; confirmação antes de export/compartilhar; copy honesta (“dados só neste dispositivo/servidor da família”).
6. **Linguagem humana pt-BR** — “Remédio”, “Consulta”, “Exame”, “Carteirinha”, “Guia”; evitar jargão de EMR (encounter, FHIR id) na UI.
7. **Erros recuperáveis** — estados vazios com próximo passo (“Adicionar primeiro remédio do João”); loading esqueleto suave; erro com retry, sem culpar o usuário.
8. **Sem cards por default** — cards só quando há interação clara (ex.: dose a confirmar). Listas e seções com espaço e tipografia bastam.

---

## 5. Padrões mobile + desktop

| | Mobile | Desktop |
|--|--------|---------|
| Nav | Bottom 4 + Mais; switcher no topo | Rail ou top + switcher à direita do logo |
| Densidade | Uma coluna; ações primárias no polegar | Duas colunas quando ajuda (lista + detalhe) |
| Detalhe | Full-screen sheet / página | Painel detalhe ao lado da lista (medicamento, exame, consulta) |
| Formulários | Campos longos, teclado numérico para doses/datas | Labels à esquerda ou acima; atalho salvar |
| Home | Hero curto (marca + “Hoje”) + próximos eventos do núcleo | Mesma composição, mais respiro; sem grade de widgets |
| Toque | Alvos ≥ 44px; swipe só como atalho opcional (ex. arquivar), com botão equivalente | Hover revela ações secundárias; foco teclado completo |

Primeira viewport (home): **marca Cuidário + uma linha de contexto + CTA principal (ex. “Ver hoje”) + âncora visual do núcleo familiar**. Sem stats strips, sem agenda completa, sem endereço, sem promos.

---

## 6. Primeiro slice — descrição wire-level (prosa)

Escopo visual/UX do MVP navegável. Sem código — estrutura e conteúdo.

### 6.1 Início / hub da família

- **Topo:** logo tipográfico “Cuidário”; switcher de membro (ou “Família” quando visão agregada).
- **Bloco único de abertura:** saudação curta + “Hoje na família” (não dashboard).
- **Faixa “Próximo”:** no máximo 3 itens mistos (consulta, dose, exame a buscar) com membro, data/hora, tipo — lista, não cards com sombra.
- **Alertas calmos** (se houver): remédio acabando, carteirinha vencendo — tom `--warn`, uma linha + link.
- **Atalhos:** Adicionar remédio · Marcar consulta · Anexar exame · Ver plano — texto, não grade de ícones.
- **Vazio:** “Nada previsto nos próximos dias. Que tal registrar a próxima consulta?”

### 6.2 Overview do membro

- Cabeçalho com nome, parentesco, idade; ações: Editar perfil · Trocar membro.
- Resumo em seções empilhadas (não KPI cards):
  - **Em uso:** N medicamentos ativos (link).
  - **Próxima consulta:** data, especialidade, local.
  - **Último exame:** nome + data.
  - **Plano:** operadora + nº parcial da carteirinha + validade.
  - **Atenção:** alergias críticas (chips só aqui, com significado clínico).
- CTA secundário: “Ver histórico clínico” → alergias, condições, vacinas, procedimentos.

### 6.3 Medicamentos

- Filtros: Em uso | Suspensos | Todos.
- Lista: nome comercial/princípio, dose, frequência, membro (se visão família), próxima tomada se aplicável.
- Detalhe (sheet/página): posologia, prescriptor, início/fim, estoque aproximado, anexos da receita, notas.
- Ações: Registrar tomada (opcional v1 leve), Editar, Suspender.
- Vazio: ilustração discreta + “Adicionar medicamento”.

### 6.4 Consultas

- Abas ou segmentos: Próximas | Passadas.
- Item: data/hora, especialidade ou motivo, profissional/local, membro, status (agendada, realizada, cancelada).
- Detalhe: preparação (o que levar), notas pós-consulta, anexos, vínculo a exame pedido.
- Criar consulta: formulário curto (membro, quando, onde, especialidade, lembrete).

### 6.5 Exames

- Lista cronológica com tipo (laboratório, imagem, outro), data, lab/clínica, status (pedido / realizado / com laudo).
- Detalhe: valores manuais essenciais (opcional no slice), PDF/imagem anexada, tags, compartilhar/exportar com confirmação.
- Upload: arrastar no desktop; galeria/arquivo no mobile; estado de processamento simples.
- Vazio: “Anexe o próximo laudo para não perder no WhatsApp.”

### 6.6 Plano de saúde (BR) — net-new

- Cabeçalho: operadora, produto/plano, titular, validade.
- **Carteirinha digital:** número (mascarável), CNS se houver, beneficiários do núcleo no mesmo contrato.
- **Contatos úteis:** SAC, autorização, reembolso (campos livres + telefone/link).
- **Guias / autorizações:** lista simples (procedimento, status, validade) — sem integração com operadora no v1.
- **Rede / observações:** texto e links (ex. “preferir Hospital X”, “coparticipação Y”).
- Privacidade: números sensíveis ocultos por padrão com “Revelar”.

---

## 7. Critérios de sucesso do design

- Em 5 segundos, entende-se *de quem* são os dados e *o que fazer hoje*.
- A home não parece um dashboard clínico genérico após remover a nav.
- Plano de saúde parece cidadão brasileiro, não “insurance module” traduzido.
- Mobile e desktop compartilham a mesma hierarquia; só o chassis muda.
- Pessoa leiga da família consegue achar remédio, próxima consulta e carteirinha sem treino.
