class Admin::PropuestasController < ApplicationController
  before_action :authenticate_admin!
  before_action :set_propuestum, only: [:show, :edit, :update, :destroy]

  # GET /propuesta
  # GET /propuesta.json
  def index
    @propuestas = Propuestum.all
  end
  # GET /propuesta/1
  # GET /propuesta/1.json
  def show
  end

  # GET /propuesta/new
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
    @propuestum = Propuestum.new(propuestum_params)
      if @propuestum.valid?
      @propuestum.save
      @success=true
      redirect_to admin_propuestas_path, notice: "propuesta creado exitosamente"
    else

      end

  end

  # PATCH/PUT /propuesta/1
  # PATCH/PUT /propuesta/1.json
  def update
    @success=true
    if Propuestum.exists?(params[:id])
      @propuestum = Propuestum.find params[:id]
      if @propuestum.update(propuestum_params)

        redirect_to admin_propuestas_path, notice: "propuestum editado exitosamente"
      else
        flash.now[:alert] = "Ha ocurrido un error"
        render :edit
      end
    else
      redirect_to admin_propuestas_path, alert: "propuestum no existe"
    end
  end

  # DELETE /propuesta/1
  # DELETE /propuesta/1.json
  def destroy
    @propuestum.destroy
    respond_to do |format|
      format.html { redirect_to admin_propuestas_path, notice: 'propuestum was successfully destroyed.' }
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
      params.require(:propuestum).permit(:nombre, :titulo, :correo, :organizacion, :resumen, :reviser_id,:aprobacion)
    end
end
