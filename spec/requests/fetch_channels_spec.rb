require 'rails_helper'

describe 'GET /api/channels' do
  it do
    is_expected.to eq 200
    data = JSON.parse(response.body)
    expect(data).to be_a Array
    expect(data.first).to include 'id'
    expect(data.first).to include 'name'
  end
end
