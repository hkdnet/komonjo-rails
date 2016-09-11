Rails.application.routes.draw do
  get '/', controller: 'home', action: 'index'
  namespace 'api' do
    get 'channels', controller: 'channels', action: 'index', format: 'json'
  end
end
