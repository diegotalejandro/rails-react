class User::AsistenciasController < ApplicationController
  before_action :authenticate_user!
  before_action :set_asistencium, only: [:show, :edit, :update, :destroy]

  # GET /asistencia
  # GET /asistencia.json
  def index
    @asistencias = Asistencium.where user_id: current_user.id
  end

  # GET /asistencia/1
  # GET /asistencia/1.json
  def show
  end

  # GET /asistencia/new
  def new
    @asistencium = Asistencium.new
  end

  # GET /asistencia/1/edit
  def edit
    @asistencium = Asistencium.find params[:id]
  end

  # POST /asistencia
  # POST /asistencia.json
  def create
    @success=false
    @asistencium = current_user.asistencia.new(asistencium_params)
      if @asistencium.valid?
      @asistencium.save
      @success=true
      redirect_to user_asistencias_path, notice: "Asistencia creado exitosamente"
    else
      render :new
      end

  end

  # PATCH/PUT /asistencia/1
  # PATCH/PUT /asistencia/1.json
  def update
    @success=true
    if Asistencium.exists?(params[:id])
      @asistencium = current_user.asistencia.find params[:id]
      if @asistencium.update(asistencium_params)

        redirect_to user_asistencias_path, notice: "asistencium editado exitosamente"
      else
        flash.now[:alert] = "Ha ocurrido un error"
        render :edit
      end
    else
      redirect_to user_asistencias_path, alert: "asistencium no existe"
    end
  end

  # DELETE /asistencia/1
  # DELETE /asistencia/1.json
  def destroy
    @asistencium.destroy
    respond_to do |format|
      format.html { redirect_to user_asistencias_path, notice: 'Asistencium was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_asistencium
      @asistencium = Asistencium.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def asistencium_params
      params.require(:asistencium).permit(:nombre, :apellido, :correo, :telefono, :institucion)
    end
end
