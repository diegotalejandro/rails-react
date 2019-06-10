class User::PropuestasController < ApplicationController
  before_action :authenticate_user!
  before_action :set_propuestum, only: [:show, :edit, :update, :destroy]

  # GET /propuesta
  # GET /propuesta.json
  def index
    @propuestas = Propuestum.where user_id: current_user.id
  end

  # GET /propuesta/1
  # GET /propuesta/1.json
  def show
  end

  # GET /propuestas/new
  def new
    @propuestum = Propuestum.new
  end

  # GET /propuesta/1/edit
  def edit
    @propuestum = Propuestum.find params[:id]
  end

  # POST /propuesta
  # POST /propuesta.json
  def create
    @success=false
    @propuestum = current_user.propuesta.new propuestum_params
      if @propuestum.valid?
      @propuestum.save
      @success=true
      redirect_to user_propuestas_path, notice: "propuesta creado exitosamente"
    else
      render :new
      end

  end

  # PATCH/PUT /propuesta/1
  # PATCH/PUT /propuesta/1.json
  def update
    @success=true
    if Propuestum.exists?(params[:id])
      @propuestum = current_user.propuesta.find params[:id]
      if @propuestum.update(propuestum_params)

        redirect_to user_propuestas_path, notice: "propuestum editado exitosamente"
      else
        flash.now[:alert] = "Ha ocurrido un error"
        render :edit
      end
    else
      redirect_to user_propuestas_path, alert: "propuestum no existe"
    end
  end

  # DELETE /propuesta/1
  # DELETE /propuesta/1.json
  def destroy
    @propuestum.destroy
    respond_to do |format|
      format.html { redirect_to user_propuestas_path, notice: 'propuestum was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_propuestum
      @propuestum = Propuestum.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def propuestum_params
      params.require(:propuestum).permit(:nombre, :titulo, :correo, :organizacion, :resumen)
    end
end
