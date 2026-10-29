# Cuidário

Arquivo pessoal de cuidados da família — remédios, consultas, exames e plano de saúde brasileiro. Um PHR doméstico calmo, não um painel de clínica.

**Idioma:** português (Brasil)

## O que é isto?

Cuidário é o app médico familiar do projeto Medical. A inspiração de domínio vem do [MediKeep](https://github.com/afairgiant/MediKeep); a interface e o módulo de plano de saúde BR são próprios.

Este repositório começa com um **slice visual navegável**: shell com switcher de membros, hub Início e estados vazios reais para Medicamentos, Consultas, Exames e Plano. Ainda sem autenticação nem banco — dados mock locais.

## Documentação

- [Direção de design](./docs/design-direction.md) — atmosfera, tipografia, cores, IA e wire do primeiro slice
- [Features](./docs/features.md) — must-haves, nice-to-haves e o que fica fora do v1

## Como rodar localmente

Requisitos: Node.js 20+ e npm.

```bash
git clone https://github.com/lucaslsm8/Medical.git
cd Medical
npm install
npm run dev
```

Abra [http://localhost:43127](http://localhost:43127).

Outros scripts:

```bash
npm run build   # build de produção
npm run start   # sobe o build (porta 43127)
npm run lint    # ESLint
```

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Tipografia: Fraunces (marca) + Outfit (UI)

## Licença / uso

Uso pessoal da família. Sem multi-tenant SaaS no escopo v1.
