import React, { Component } from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import FlashMessage from "./FlashMessage";
import axios from "axios";
import * as _ from "lodash";
import { passCsrfToken } from '../util/helpers'

//import { CustomSelect } from "../CustomInputs";

const RegistroSchema = Yup.object().shape({
  nombre: Yup.string().required("Campo requerido"),
  apellido: Yup.string().required("Campo requerido"),
  correo: Yup.string().email("Debe tener formato de email").required("Campo requerido"),
  telefono: Yup.number().integer("Deben ser números").required("Campo requerido"),
  institucion: Yup.string().required("Campo requerido")
});

class RegistroFormAdmin extends Component {
  state = {
    asistencia: {
      nombre:"",
      apellido:"",
      correo:"",
      telefono:"",
      institucion:""
    },
    ui: {
      isSubmitting: false,
      showMessage: false,
      messageType: undefined,
      message: undefined
    }
  };

  componentDidMount() {
    //Actualizar el UI de forma correcta
    let ui = this.state.ui;
    ui.isSubmitting = true;
    this.setState({ ui });

      if (this.props.asistenciaId) {
     axios({
        method: "get",
        url: `/admin/asistencias/${this.props.asistenciaId}/edit.json`,
        responseType: "json",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
            this.setState({ asistencia: response.data });
          })
          .catch(error => {
            this.showMessage({
              show_message: true,
              message_type: "alert-danger",
              message: "Ha ocurrido un error inesperado"
            });
          })
          .then(() => {
            this.setState(state => {
              state.ui.isSubmitting = false;
              return { ui: state.ui };
            });
          });
        }
}
  showMessage = message_data => {
    this.setState(state => {
      state.ui.showMessage = message_data.show_message;
      state.ui.messageType = message_data.message_type;
      state.ui.message = message_data.message;
      return { ui: state.ui };
    });
  };

  render() {
    const flash_message = this.state.ui.showMessage ? ( <FlashMessage type={this.state.ui.messageType} msg={this.state.ui.message}/> ) : null;
    const button_label = this.props.asistenciaId ? "Editar" : "Agregar nueva";


    return (
      <div className="container">
        {flash_message}
        <Formik showMessage={this.showMessage} enableReinitialize={true} initialValues={this.state.asistencia} validationSchema={RegistroSchema}
        onSubmit={(values, { setSubmitting }) => {
          //const token = document.getElementsByName("csrf-token")[0].content;
          const token = null;
          const url = this.props.asistenciaId
              ? `/admin/asistencias/${this.props.asistenciaId}.json`
              : `/admin/asistencias.json`;
          const method = this.props.asistenciaId ? "PUT" : "POST";
          passCsrfToken(document, axios)
            axios(
             url,{
               method,
               url,
               responseType: "json",
               headers: {
                 "Content-Type": "application/json"
                 },
               data:  { asistencium: values }
                })

              .then(response => {
                if (true || response.data.success) {
                  window.location.assign(`/admin/asistencias?success=1`);
                  }
                 else {
                   this.showMessage({
                     show_message: true,
                     message_type: "alert-warning",
                     message: response.data.message || "Ha ocurrido un error inesperado"
                  });
                }
              })
              .catch(error =>
                this.showMessage({
                  show_message: true,
                  message_type: "success",
                  message: "listo"
                })
              )
              .then(() => setSubmitting(false));
              window.location.assign(`/admin/asistencias?success=1`);
          }}>

          {({
            values,
            errors,
            touched,
            dirty,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => {
            return (
              <React.Fragment>
                <form onSubmit={handleSubmit} className="">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group mb-3">
                            <label htmlFor="nombre">Nombre</label>

                            <Field
                              type="text"
                              name="nombre"
                              className={
                                "form-control " +
                                classNames({
                                  "is-invalid":
                                    touched.nombre && errors.nombre,
                                  "is-valid":
                                    touched.nombre && !errors.nombre
                                })
                              }/>
                            <ErrorMessage name="nombre">
                              {msg => (
                                <div
                                  className="invalid-feedback"
                                  style={{ display: "block" }}
                                >
                                  {msg}
                                </div>
                              )}
                            </ErrorMessage>

                            <label htmlFor="correo">
                              E-Mail
                            </label>
                          <Field
                          type="text"
                          name="correo"
                          className={
                            "form-control " +
                            classNames({
                              "is-invalid":
                                touched.correo && errors.correo,
                              "is-valid":
                                touched.correo && !errors.correo
                            })
                          }
                          />
                          <ErrorMessage name="correo">
                          {msg => (
                            <div
                              className="invalid-feedback"
                              style={{ display: "block" }}
                            >
                              {msg}
                            </div>
                          )}
                          </ErrorMessage>


                        </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group mb-3">


                          <label htmlFor="apellido">
                            Apellido
                          </label>
                        <Field
                        type="text"
                        name="apellido"
                        className={
                          "form-control " +
                          classNames({
                            "is-invalid":
                              touched.apellido && errors.apellido,
                            "is-valid":
                              touched.apellido && !errors.apellido
                          })
                        }
                        />
                        <ErrorMessage name="apellido">
                        {msg => (
                          <div
                            className="invalid-feedback"
                            style={{ display: "block" }}
                          >
                            {msg}
                          </div>
                        )}
                        </ErrorMessage>



                        <label htmlFor="telefono">
                          Teléfono
                        </label>
                    <Field
                      type="text"
                      name="telefono"
                      className={
                        "form-control " +
                        classNames({
                          "is-invalid":
                            touched.telefono && errors.telefono,
                          "is-valid":
                            touched.telefono && !errors.telefono
                        })
                      }
                    />
                    <ErrorMessage name="telefono">
                      {msg => (
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>

                    </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-3">


                    <label htmlFor="institucion">
                      Institución
                    </label>
                  <Field
                    type="text"
                    name="institucion"
                    className={
                      "form-control " +
                      classNames({
                        "is-invalid":
                          touched.institucion && errors.institucion,
                        "is-valid":
                          touched.institucion && !errors.institucion
                      })
                    }
                  />
                  <ErrorMessage name="institucion">
                    {msg => (
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>


                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        {`${button_label} asistencia`}
                      </button>
                    </div>
                  </div>
                </form>
              </React.Fragment>
            );
          }}
        </Formik>
      </div>
    );
  }
}

WebpackerReact.setup({RegistroFormAdmin})
