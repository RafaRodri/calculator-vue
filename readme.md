<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## Sobre o projeto

Calculadora desenvolvida com Laravel e Vue.js.

<img border="3" src="public/prints/1-calc.png">
<img border="3" src="public/prints/2-calc.png">


## Passo a Passo
#### Configuração - Backend 
```
# Instalar dependências do projeto
$ composer install

# Configurar variáveis de ambiente
$ cp .env.example .env
$ php artisan key:generate
```

#### Configuração - Frontend
```
# Atualizar dependências
$ npm install

# Rodar em ambiente local
$ npm run dev

# Rodar em ambiente de produção
$ npm run build

# Serve no modo de produção
$ npm start
```
