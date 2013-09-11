class ApiController < ApplicationController
  respond_to :json
  def test
    render :json => [1,2,3,4]
  end
end
