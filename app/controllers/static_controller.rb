require 'rails/application_controller'

class StaticController < Rails::ApplicationController
  layout false

  def index
    render file: Rails.root.join('public', 'index.html')
  end

  def about
    render file: Rails.root.join('public', 'about.html')
  end
end
