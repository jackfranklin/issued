require 'test_helper'

class ApiControllerTest < ActionController::TestCase
  test "should get test" do
    get :test
    assert_response :success
  end

end
