Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'
  resources :posts
  resources :profiles, only: [:show,:new, :create, :edit, :update, :destroy]
end
