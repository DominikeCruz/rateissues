Rails.application.routes.draw do
  get 'pages/index'
  get 'search/:language', to: 'pages#search', as: "search"
  root to: 'pages#index'
end
