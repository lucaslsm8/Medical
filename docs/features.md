# Features — Cuidário (Medical Project / Lucas)

Escopo funcional do PHR familiar pessoal. Domínio inspirado em [MediKeep](https://github.com/afairgiant/MediKeep); UI e módulo de plano de saúde BR são próprios. Ver também `design-direction.md`.

**Data:** 2026-10-29 · **Idioma do produto:** pt-BR.

---

## 1. Must-have — v1 (uso pessoal da família)

Foco: um núcleo familiar real (ex. Lucas + dependentes/pais) registrar e consultar o essencial no dia a dia, em português, com plano de saúde brasileiro.

| # | Feature | Descrição curta |
|---|---------|-----------------|
| F1 | **Núcleo familiar** | CRUD de membros (nome, parentesco, nascimento, foto/iniciais); contexto ativo global. |
| F2 | **Switcher de membro** | Troca rápida de contexto em todas as telas clínicas. |
| F3 | **Hub Início** | Visão “hoje / próximos” agregada da família + atalhos; sem dashboard clínico pesado. |
| F4 | **Overview do membro** | Resumo: meds ativos, próxima consulta, último exame, plano, alergias críticas. |
| F5 | **Medicamentos** | Cadastro (nome, dose, frequência, início/fim, status ativo/suspenso); lista Em uso / Arquivo. |
| F6 | **Consultas / visitas** | Agenda e histórico (data, local, especialidade, profissional, notas, status). |
| F7 | **Exames & anexos** | Registro de exames + upload de PDF/imagem; lista cronológica e detalhe. |
| F8 | **Perfil clínico básico** | Alergias, condições/diagnósticos em acompanhamento, vacinas (lista simples), observações. |
| F9 | **Plano de saúde BR** | Operadora, produto, carteirinha (titular/beneficiários), validade, contatos, notas de rede/coparticipação; guias/autorizações manuais. |
| F10 | **i18n pt-BR** | Interface, datas, termos de saúde e empty states 100% em português do Brasil. |
| F11 | **Privacidade local** | Bloqueio por PIN/biometria do dispositivo (ou senha do app); mascarar carteirinha/números; confirmação antes de export. |
| F12 | **Estados vazios / loading / erro** | Cobertura UX nas telas do primeiro slice. |
| F13 | **Layout mobile + desktop** | Nav e padrões descritos em `design-direction.md`. |

**Não exige v1:** multi-usuário com contas separadas na nuvem, sync com operadora, FHIR, OCR de laudos, lembretes push sofisticados.

---

## 2. Nice-to-have / depois

| Feature | Por quê depois |
|---------|----------------|
| Lembretes de dose e de consulta (push / e-mail) | Depende de canal e permissões; v1 pode ser só data na agenda. |
| Registrar tomada (adesão) com histórico | Complemento de F5; útil, não bloqueante. |
| OCR / parse de laudos e receitas (PDF) | Alto valor; complexidade e privacidade — pós-MVP. |
| Relatórios exportáveis (PDF/CSV) do histórico | MediKeep tem report builder; útil para levar ao médico. |
| Compartilhamento temporário com cuidador/médico (link) | Modelo MediKeep/HealthTrack; exige auth e threat model. |
| Histórico familiar (doenças na família) | MediKeep tem; secundário ao operacional do dia a dia. |
| Procedimentos, sintomas, vitais com gráficos | Enriquecem o arquivo; não são o hub diário. |
| Rede credenciada estruturada / busca | Dados frágeis sem API de operadora; manter notas livres no v1. |
| Reembolso (protocolo + status + valores) | Extensão natural do módulo Plano. |
| Import FHIR / portais | Pouco comum no BR no curto prazo. |
| Multi-dispositivo sync / self-host Docker familiar | Quando sair do protótipo single-user. |
| Modo visitante / dados mascarados na TV | Refinamento de privacidade. |
| Impressão da carteirinha / wallet | Conveniência pós-estabilizar o módulo Plano. |

---

## 3. Explicitamente fora de escopo — v1

| Item | Motivo |
|------|--------|
| EMR / prontuário de clínica (OpenEMR-like) | Produto é PHR familiar, não software de consultório. |
| Telemedicina, chat com médico, prescrição digital ICP-Brasil | Outro produto e compliance. |
| Integração automática com operadoras (autorização online, extrato) | APIs inexistentes/instáveis para uso pessoal; v1 é vault manual. |
| Marketplace de clínicas, ads, “encontrar médico” | Conflita com tom calmo e privacidade. |
| Diagnóstico por IA / triagem automática | Risco clínico e expectativa errada; eventual OCR com human-in-the-loop só depois. |
| Rede social de saúde / feed | Fora do pedido. |
| App nativo iOS/Android obrigatório | Web responsiva (PWA opcional depois) basta no v1. |
| Multi-tenant SaaS / onboarding comercial | Uso pessoal da família Lucas. |
| Compliance hospitalar completo (auditoria clínica formal) | Overkill; manter bom senso de privacidade e export. |
| Traduzir/copiar UI do MediKeep | Domínio sim; visual e UX não. |

---

## 4. Mapa: MediKeep-like vs net-new

Legenda: **MK** = ideia/domínio alinhado ao MediKeep (ou PHRs familiares similares) · **NEW** = específico deste produto · **ADAPT** = existe no domínio mas redesenhado para BR/família.

| Área | Origem | Notas |
|------|--------|-------|
| Pacientes / membros da família | **MK** → **ADAPT** | Modelo familiar + switcher e copy pt-BR; papéis de parentesco BR. |
| Compartilhamento entre contas | **MK** | Adiado (nice-to-have); v1 = um vault do núcleo. |
| Medicamentos / tratamentos | **MK** → **ADAPT** | Posologia e status; UI lista calma, não painel clínico. |
| Visitas / encontros | **MK** → **ADAPT** | “Consultas” na linguagem BR; prep + notas. |
| Labs + uploads | **MK** → **ADAPT** | Exames + anexos; parse/OCR depois. |
| Condições, alergias, imunizações, procedimentos | **MK** | No overview / perfil clínico; sintomas/vitais gráficos depois. |
| Family history | **MK** | Nice-to-have. |
| Report builder PDF/JSON/CSV | **MK** | Depois do arquivo estar populado. |
| SSO, backups avançados | **MK** | Infra depois; v1 foco produto. |
| **Plano de saúde (operadora, carteirinha, beneficiários, guias manuais, contatos, coparticipação/notas)** | **NEW** | Gap universal nas bases open-source; feature-âncora BR. |
| **pt-BR completo (UI + termos)** | **NEW** | MediKeep é EN. |
| **Hub familiar “hoje” + privacidade perceptível (PIN, máscara)** | **ADAPT / NEW** | Direção UX própria (`design-direction.md`). |
| Inspiração lateral (não base v1) | — | Carefold (insurance narrative, licença ruim); Mediqux (consultas+exames); Strand/Health Assistant (import depois). |

---

## 5. Ordem sugerida de build

### Fase A — MVP usável em casa

1. Shell do app (nav, tema, pt-BR, switcher).
2. Membros da família + overview.
3. Medicamentos (CRUD + lista).
4. Consultas (próximas/passadas + detalhe).
5. Exames com upload de anexo.
6. Perfil clínico mínimo (alergias + condições).
7. **Plano de saúde BR** (carteirinha + contatos + guias manuais).
8. Hub Início agregando próximos eventos.
9. PIN / máscara de dados sensíveis + empty/loading/erro.

**Critério de pronto MVP:** Lucas cadastra a família, vê a próxima consulta, a medicação de um dependente, anexa um laudo e abre a carteirinha do plano sem sair do app.

### Fase B — em seguida

1. Lembretes simples (consulta / renovar receita / validade carteirinha).
2. Registro de tomadas (adesão leve).
3. Vacinas e procedimentos no perfil clínico.
4. Export PDF “levar ao médico”.
5. Guias de plano com status + campos de reembolso manual.

### Fase C — evolução

1. OCR/parse de laudos (human-in-the-loop).
2. Sync multi-dispositivo / self-host.
3. Compartilhamento temporário com cuidador.
4. Histórico familiar e relatórios ricos.
5. Avaliar FHIR/import só se houver fonte BR concreta.

---

## 6. Resumo executivo

**v1** = família + medicamentos + consultas + exames/anexos + perfil clínico básico + **plano de saúde BR** + pt-BR + privacidade leve + hub calmo.  
**Depois** = lembretes, adesão, export, OCR, sync, sharing.  
**Nunca no v1** = EMR de clínica, telemedicina, integração automática com operadora, IA diagnóstica, UI clone do MediKeep.
