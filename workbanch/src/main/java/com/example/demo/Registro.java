package com.example.demo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.crypto.Data;

@Entity
@Table(name = "registro")
public class Registro {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;

@Column(name = "endereco")
private String endereco;

@Column(name = "numero")
private String numero;

@Column(name = "cep")
private String cep;

@Column(name = "bairro")
private String bairro;

@Column(name = "cidade")
private String cidade;

@Column(name = "pontoreferencia")
private String pontoreferencia;

@Column(name = "descreva")
private String descreva;

@Column(name = "etnia")
private String etnia;

@Column(name = "genero")
private String genero;

@Column(name = "data")
private Date data;


public Registro() {

}

public Registro(String endereco, String numero, String cep, String bairro, String cidade, String pontoreferencia,String descreva, String etnia, String genero, Date data) {
super();
this.endereco = endereco;
this.numero = numero;
this.cep = cep;
this.bairro = bairro;
this.cidade = cidade;
this.pontoreferencia = pontoreferencia;
this.descreva = descreva;
this.etnia = etnia;
this.genero = genero;
this.data = data;
}

public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public String getEndereco() {
	return endereco;
}

public void setEndereco(String endereco) {
	this.endereco = endereco;
}

public String getNumero() {
	return numero;
}

public void setNumero(String numero) {
	this.numero = numero;
}

public String getCep() {
	return cep;
}

public void setCep(String cep) {
	this.cep = cep;
}

public String getBairro() {
	return bairro;
}

public void setBairro(String bairro) {
	this.bairro = bairro;
}

public String getCidade() {
	return cidade;
}

public void setCidade(String cidade) {
	this.cidade = cidade;
}

public String getPontoreferencia() {
	return pontoreferencia;
}

public void setPontoreferencia(String pontoreferencia) {
	this.pontoreferencia = pontoreferencia;
}

public String getDescreva() {
	return descreva;
}

public void setDescreva(String descreva) {
	this.descreva = descreva;
}

public String getEtnia() {
	return etnia;
}

public void setEtnia(String etnia) {
	this.etnia = etnia;
}

public String getGenero() {
	return genero;
}

public void setGenero(String genero) {
	this.genero = genero;
}


public Date getData() {
	return data;
}

public void setData(Date data) {
	this.data = data;
}




}