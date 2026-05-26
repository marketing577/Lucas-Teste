# Oceani Academy

Plataforma de aprendizado gamificado para vendedores Opergel e Oceani.

## 🌊 Visão Geral

Oceani Academy é um aplicativo web moderno que oferece um ambiente de aprendizado interativo com gamificação, permitindo que vendedores das empresas Opergel e Oceani se desenvolvam através de trilhas de aprendizado temáticas.

## ✨ Características

### Para Vendedores
- Dashboard personalizado com estatísticas de progresso
- 7 trilhas de aprendizado temáticas
- Sistema de XP e níveis com linguagem do mar
- Quizzes e avaliações com feedback imediato
- Certificados personalizados
- Ranking de engajamento
- Missões semanais
- Badges e conquistas

### Para Administradores
- Dashboard com métricas de engajamento
- Gerenciamento completo de trilhas e aulas
- Criação de quizzes e perguntas
- Gestão de missões semanais
- Administração de vendedores

## 🎨 Design

- Tema tropical brasileiro com paleta azul claro e dourado
- Interface flat e moderna
- Responsiva e acessível
- Ícones Tabler Icons
- Imagens do Unsplash

## 🛠️ Tecnologia

- **Frontend**: React 18 + Tailwind CSS
- **Roteamento**: React Router v6
- **HTTP**: Axios
- **Autenticação**: JWT
- **Gráficos**: Recharts

## 📦 Instalação

```bash
npm install
```

## 🚀 Desenvolvimento

```bash
npm run dev
```

## 🔐 Credenciais de Teste

**Vendedor:**
- Email: seller@example.com
- Senha: 123456

**Administrador:**
- Email: admin@example.com
- Senha: 123456

## 📚 Trilhas Disponíveis

1. Nossa História
2. Mundo do Salmão
3. Expert em Bacalhau
4. Culinária Japonesa
5. Consultor Food Service
6. Consultor Varejo
7. Técnicas Comerciais

## 🎮 Sistema de Gamificação

### Níveis
1. Marinheiro de Primeira Viagem (0–300 XP)
2. Navegante (300–700 XP)
3. Pescador Sênior (700–1.200 XP)
4. Mestre dos Mares (1.200–2.000 XP)
5. Capitão Oceani (2.000–3.500 XP)
6. Lenda do Oceano (3.500+ XP)

### XP por Ação
- Assistir aula completa: +50 XP
- Concluir quiz (70%+): +100 XP
- Nota máxima no quiz: +50 XP bônus
- Missão semanal: +150 a +300 XP
- Dia de acesso seguido: +20 XP/dia

## 🌐 Deploy

- Frontend: Vercel
- Backend: Railway (quando implementado)

## 📝 Estrutura do Projeto

```
src/
├── components/
│   ├── auth/
│   ├── seller/
│   └── admin/
├── context/
├── pages/
│   ├── seller/
│   └── admin/
├── App.jsx
├── index.jsx
└── index.css
```
