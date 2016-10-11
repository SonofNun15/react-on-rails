Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'main#index'

  get 'register' => 'users#new'
  post 'register' => 'users#create'
  get 'profile' => 'users#show'
  patch 'profile' => 'users#edit'
  get 'password' => 'users#show_password'
  post 'password' => 'users#edit_password'

  get 'login' => 'session#new'
  post 'login' => 'session#create'
  post 'logout' => 'session#destroy'

  get 'vehicle/new' => 'vehicle#new'
  post 'vehicle' => 'vehicle#create'
end
