class PagesController < ApplicationController
  def index
  end

  def search
    # fazer uma busca baseada no params[:language]
    @language = params[:language]
  end
end
