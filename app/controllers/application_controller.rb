class ApplicationController < ActionController::Base


  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:nombre, :telefono, :email, :password, :password_confirmation, :remember_me) }
    devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:nombre, :telefono, :email, :password, :remember_me) }
    devise_parameter_sanitizer.for(:account_update) {|u| u.permit(:nombre, :telefono, :email, :password, :password_confirmation, :current_password)}
  end
end
