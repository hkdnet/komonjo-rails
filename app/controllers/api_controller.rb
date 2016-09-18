class ApiController < ApplicationController
  def client
    @client ||= Komonjo::Client.new(token: token.value)
  end

  def token
    @token ||= SlackToken.from_env
  end
end
