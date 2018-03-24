Rails.application.routes.draw do
  get 'static/index'

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :menus
    resources :items
  end

  get '/about', to: 'static#about'
  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
