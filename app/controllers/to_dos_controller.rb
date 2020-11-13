class ToDosController < ApplicationController
  before_action :set_to_do, only: %i[show edit update destroy]

  # GET /to_dos
  # GET /to_dos.json
  def index
    render inertia: "ToDoApp", props: { toDoItems: ToDo.all }
  end

  # POST /to_dos
  # POST /to_dos.json
  def create
    to_do = ToDo.new(to_do_params)

    if to_do.save
      redirect_to to_dos_path, notice: "To do was successfully created."
    else
      render inertia: "ToDoApp", props: { toDoItems: ToDo.all, errors: true }
    end
  end

  def update
    if @to_do.update(to_do_params)
      redirect_to to_dos_path, notice: "To do was successfully updated."
    else
      render inertia: "ToDoApp", props: { toDoItems: ToDo.all, errors: @to_do.errors }
    end
  end

  # DELETE /to_dos/1
  # DELETE /to_dos/1.json
  def destroy
    @to_do.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_to_do
    @to_do = ToDo.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def to_do_params
    params.require(:to_do).permit(:description, :completed)
  end
end
