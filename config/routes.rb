Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'main#index'

  get 'register' => 'users#new'
  post 'register' => 'users#create'

  get 'login' => 'session#new'
  post 'login' => 'session#create'
  post 'logout' => 'session#destroy'
end
