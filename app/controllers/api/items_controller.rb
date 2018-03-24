class Api::ItemsController < ApplicationController

  before_action :get_item, only: [:show]

  def index
    render json: Item.all
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
    Item.find(params[:id]).destroy
  end

  private
    def item_params
      params.require(:item).permit(:name, :price, :type, :description, :menu_id)
    end

    def set_item
      @item = Item.find(params[:id])
    end

end
