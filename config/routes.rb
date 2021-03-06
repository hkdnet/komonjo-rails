Rails.application.routes.draw do
  get '/', controller: 'home', action: 'index'
  namespace 'api' do
    get 'channels', controller: 'channels', action: 'index', format: 'json'
    get 'channels/:channel_name/messages', controller: 'messages', action: 'index', format: 'json'
    get 'emojis', controller: 'emojis', action: 'index', format: 'json'
  end
end
