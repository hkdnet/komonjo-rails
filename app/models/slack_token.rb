class SlackToken
  attr_accessor :value
  def self.from_env
    token = SlackToken.new
    token.value = ENV['KOMONJO_SLACK_API_TOKEN']
    token
  end
end
