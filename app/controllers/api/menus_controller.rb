class Api::MenusController < ApplicationController
  def index
    render json: Item.where(menu_id: params[:id])
  end

  def show
  end

  def create
    menu = Menu.create(params[:name])

    if menu.save
      render json: menu
    else
      render json: "Something went wrong"
    end
  end

  def update
  end

  def destroy
    Menu.find(params[:id]).destroy
  end

  private

    def set_menu
      @menu = Menu.find(params[:id])
    end

    def menu_params
      params.require(:menu).permit(:name)
    end
end
