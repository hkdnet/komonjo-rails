def client
  @client ||= Komonjo::Client.new(token: ENV['KOMONJO_SLACK_API_TOKEN'])
end

namespace :komonjo do
  task :emoji do
    require 'json'
    require 'fileutils'
    FileUtils.mkdir_p("tmp/komonjo/")
    File.write("tmp/komonjo/emoji.json", client.emoji.to_json)
  end
end
