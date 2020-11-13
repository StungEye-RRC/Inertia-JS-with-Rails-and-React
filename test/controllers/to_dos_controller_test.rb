require 'test_helper'

class ToDosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @to_do = to_dos(:one)
  end

  test "should get index" do
    get to_dos_url
    assert_response :success
  end

  test "should get new" do
    get new_to_do_url
    assert_response :success
  end

  test "should create to_do" do
    assert_difference('ToDo.count') do
      post to_dos_url, params: { to_do: { completed: @to_do.completed, description: @to_do.description } }
    end

    assert_redirected_to to_do_url(ToDo.last)
  end

  test "should show to_do" do
    get to_do_url(@to_do)
    assert_response :success
  end

  test "should get edit" do
    get edit_to_do_url(@to_do)
    assert_response :success
  end

  test "should update to_do" do
    patch to_do_url(@to_do), params: { to_do: { completed: @to_do.completed, description: @to_do.description } }
    assert_redirected_to to_do_url(@to_do)
  end

  test "should destroy to_do" do
    assert_difference('ToDo.count', -1) do
      delete to_do_url(@to_do)
    end

    assert_redirected_to to_dos_url
  end
end
