import { useRef, useState } from 'react'
import './style.css'

export const Dashboard = () => {

  return (

    <div className="general-container">
      <header className="dashboard-header">
        <div className="header-block__left">
          <button className="header-mobile-menu__btn">
            <svg className="header-mobile-menu__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12.0001H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 6H15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 17.9999H15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <img className="header-company__avatar" src="./assets/images/company-avatar.png" alt="Avatar da Empresa" />

        </div>
        <ul className="header-block__right">
          <li className="header-help__item">
            <a href="#" className="header-help__link">
              <svg className="header-help__link--icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.09003 9.00008C9.32513 8.33175 9.78918 7.76819 10.4 7.40921C11.0108 7.05024 11.7289 6.91902 12.4272 7.03879C13.1255 7.15857 13.7588 7.52161 14.2151 8.06361C14.6714 8.60561 14.9211 9.2916 14.92 10.0001C14.92 12.0001 11.92 13.0001 11.92 13.0001" stroke="#142159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 17H12.0094" stroke="#142159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <ul className="header-help__notification">
              <li className="header-help__notification--center">
                <a href="#">
                  Central de Ajuda
                </a>
              </li>
              <li className="header-help__notification--tutorials">
                <a href="#">
                  Tutoriais
                </a>
              </li>
              <li className="header-help__notification--talk">
                <a href="#">
                  Falar com Especialista
                </a>
              </li>
            </ul>
          </li>
          <li className="header-notice__item">
            <a href="#" className="header-notice__link">
              <svg className="header-notice__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 8.40096C17.5 6.96853 16.9205 5.59478 15.8891 4.5819C14.8576 3.56903 13.4587 3 12 3C10.5413 3 9.14236 3.56903 8.11091 4.5819C7.07946 5.59478 6.5 6.96853 6.5 8.40096C6.5 14.7021 3.75 16.5024 3.75 16.5024H20.25C20.25 16.5024 17.5 14.7021 17.5 8.40096Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.5859 20.1028C13.4247 20.3756 13.1934 20.6021 12.9151 20.7595C12.6368 20.9169 12.3212 20.9998 12 20.9998C11.6789 20.9998 11.3633 20.9169 11.085 20.7595C10.8067 20.6021 10.5754 20.3756 10.4142 20.1028" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="18" cy="3.75" r="3" fill="#F03460" />
              </svg>
            </a>
            <ul className="header-notice__notification">
              <li className="header-notice__notification--01">
                <div className="notification--01__welcome">
                  <span className="welcome__text">
                    👋&nbsp;&nbsp;Bem-vindo(a) a Hubly Retailer
                  </span>
                  <span className="welcome__update">
                    10 min
                  </span>
                  <div className="welcome__update--icon"></div>
                </div>
                <p className="notification--01__text">
                  Para uma completa experiência com
                  a Retailer, precisamos que você siga
                  os passos abaixo.
                </p>
                <div className="notification--01__register">
                  <input type="checkbox" className="register__checkbox" checked />
                  <span className="register__text">
                    Cadastrar Organização
                  </span>
                </div>
                <div className="notification--01__invite">
                  <input type="checkbox" className="invite__checkbox" />
                  <span className="invite__text">
                    Convidar Revendedores
                    <a href="#" className="invite__text-link">
                      Vamos lá!
                    </a>
                  </span>
                </div>
              </li>
              <li className="header-notice__notification--02">
                <div className="notification--02__report">
                  <span>📈</span>
                  <span className="report__text">
                    O seu Relatório Mensal está <br />pronto!
                  </span>
                  <span className="report__update">
                    12 min
                  </span>
                </div>
                <a href="#" className="notification--02__link">
                  Ir para Relatórios
                </a>
              </li>
              <li className="header-notice__notification--03">
                <a href="#" className="notification--03__viewed">
                  Marcar como Lidas
                </a>
              </li>
            </ul>
          </li>
          <li className="header-user__item">

          </li>
        </ul>
      </header>
      <main className="main-container">
        <aside className="dashboard-aside">
          <div className="aside-menu">
            <ul className="aside-menu__list">
              <li className="aside-submenu__item" >
                <a href="#" className="aside-submenu__item--link">Relatórios</a></li>
              <li className="aside-submenu__item" >
                <a href="#" className="aside-submenu__item--link">Para Vender</a></li>
              <li className="aside-submenu__item" >
                <a href="#" className="aside-submenu__item--link">Assinaturas</a></li>
              <li className="aside-submenu__item" >
                <a href="#" className="aside-submenu__item--link">Financeiro</a></li>
              <li className="aside-submenu__item" >
                <a href="#" className="aside-submenu__item--link">Configurações</a></li>
              <li className="aside-submenu__item" >
                <a href="#" className="aside-submenu__item--link">Ferramentas</a></li>
            </ul>
          </div>
        </aside>

        <div className="container">

          <section className="leading-informations">
            <h1 className="page-title">
              Olá, Gustavo
            </h1>
            <p className="period__text">
              veja abaixo o resumo da sua organização
            </p>
          </section>
          <section className="report">

            <div className="report__tabs">
              <a href="#" className="report__tabs--text report__tabs--text-selected">
                Receitas
              </a>
              <a href="#" className="report__tabs--text">
                Parceiros
              </a>
              <a href="#" className="report__tabs--text">
                Comissões
              </a>
            </div>
            <div className="report__sell tab select__tab" id="tab1">
              <div className="report__cards">
                <div className="report__title">
                  <h2 className="report__title--text">
                    Receitas
                  </h2>
                </div>
                <div className="calendar-options">
                  <button className="calendar-options__btn calendar-options__btn--active">
                    Últimos 7 dias
                  </button>
                  <button className="calendar-options__btn">
                    Últimos 15 dias
                  </button>
                  <button className="calendar-options__btn">
                    Últimos mês
                  </button>
                  <button className="calendar-options__btn">
                    Último ano
                  </button>
                  <button className="calendar-options__btn">
                    Personalizado
                    <svg className="calendar-options__btn--dropdown" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.00016 6.5L8.00016 9.5L11.0002 6.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <canvas id="report__chart1"></canvas>
              <div className="report__labels--name">
                <div className="labels-name__config">
                  <div className="labels-name__config--color" id="label-01__color"></div>
                  <span className="labels-name__config--text" id="label-01"></span>
                </div>
                <div className="labels-name__config">
                  <div className="labels-name__config--color" id="label-02__color"></div>
                  <span className="labels-name__config--text" id="label-02"></span>
                </div>
                <div className="labels-name__config">
                  <div className="labels-name__config--color" id="label-03__color"></div>
                  <span className="labels-name__config--text" id="label-03"></span>
                </div>
                <div className="labels-name__config">
                  <div className="labels-name__config--color" id="label-04__color"></div>
                  <span className="labels-name__config--text" id="label-04"></span>
                </div>
              </div>
            </div>
            <div className="report__request tab" id="tab2">
              <canvas id="report__chart2"></canvas>
              <div className="report__labels--name">
                <div className="labels-name__config">
                  <div className="labels-name__config--color" id="label-05__color"></div>
                  <span className="labels-name__config--text" id="label-05"></span>
                </div>
              </div>
            </div>
            <div className="report__resellers tab" id="tab3">
              <div className="report__resellers--container">
                <div className="report__resellers--left">
                  <div className="report__resellers--options">
                    <span className="report__resellers--options-text">Mostrar</span>
                    <select className="report__resellers--options-input">
                      <option value="valor1" selected>Todos os revendedores</option>
                    </select>
                  </div>
                  <canvas id="report__chart3"></canvas>
                  <div className="report__labels--name report__labels--name-chart3">
                    <div className="labels-name__config">
                      <div className="labels-name__config--color" id="label-06__color"></div>
                      <span className="labels-name__config--text" id="label-06"></span>
                    </div>
                    <div className="labels-name__config">
                      <div className="labels-name__config--color" id="label-07__color"></div>
                      <span className="labels-name__config--text" id="label-07"></span>
                    </div>
                    <div className="labels-name__config">
                      <div className="labels-name__config--color" id="label-08__color"></div>
                      <span className="labels-name__config--text" id="label-08"></span>
                    </div>
                  </div>
                </div>
                <div className="report__resellers--right">
                  <img src="./assets/images/trophy-image.png" className="report__resellers--emoticon" />
                  <span className="report__resellers--title">Ranking de revendedores</span>
                  <ul className="report__resellers--list">

                  </ul>
                  <div className="report__resellers--see-all">
                    <button type="button" className="resellers--see-all__btn">
                      Ver todos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="insights-section">
            <div className="insights-section__title">
              <img src="./assets/images/eyes-image.png" className="insights-section__title--image" />
              <h2 className="insights-section__title--text">
                Últimas vendas
              </h2>
            </div>
            <div className="insights-section__products">
              <span className="insights-section__products--name">Produtos mais vendidos</span>
              <div className="insights-section__products--description">
                <span className="insights-section__products--description-product">Produto</span>
                <span className="insights-section__products--description-id">Número do Pedido</span>
                <span className="insights-section__products--description-departament">Departamento</span>
                <span className="insights-section__products--description-value">Valor</span>
              </div>
              <div className="insights-section__products--list"></div>
            </div>
            <div className="insights-nav">
              <div className="insights-nav__quantity">
                <span className="insights-nav__quantity--text">Exibindo</span>
                <select className="insights-nav__selection">
                  <option className="insights-nav__selection-value" value="5" selected>5</option>
                  <option className="insights-nav__selection-value" value="10" selected>10</option>
                </select>
                <span className="insights-nav__quantity--text">produtos por pagina</span>
              </div>
              <div className="insights-nav__pagination">
                <ul className="insights-nav__pagination-list">
                  <li className="insights-nav__pagination-arrow">
                    <a className="insights-nav__pagination-arrow--backward" href="#">
                      <svg className="pagination-arrow--backward__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L6 8L9 11" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </li>
                  <li className="insights-nav__pagination-item">
                    <a className="insights-nav__pagination-item--number insights-nav__pagination-item--number-active" href="#">1</a>
                  </li>
                  <li className="insights-nav__pagination-item">
                    <a className="insights-nav__pagination-item--number" href="#">2</a>
                  </li>
                  <li className="insights-nav__pagination-item">
                    <a className="insights-nav__pagination-item--number" href="#">3</a>
                  </li>
                  <li className="insights-nav__pagination-arrow">
                    <a className="insights-nav__pagination-arrow--forward" href="#">
                      <svg className="pagination-arrow--forward__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99988 11L9.99988 8L6.99988 5" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
