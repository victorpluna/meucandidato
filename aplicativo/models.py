# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
PREFEITO = "Prefeito"
VEREADOR = "Vereador"
ATIVO = 1
INATIVO = 0
FREE = "FREE"
LIGHT = "LIGHT"
PREMIUM = "PREMIUM"

class Municipio(models.Model):
	id = models.IntegerField(primary_key=True, db_column="cod_cidade")
	nome = models.CharField(u'nome', max_length=50,db_column="nom_cidade")
	estado = models.IntegerField(db_column="cod_estado")
	estado_sigla = models.CharField(db_column="sigla_estado", max_length=2)
	def __unicode__(self):
		return self.nome

	class Meta:
		db_table = "cidade"

# class Partido(models.Model):
# 	nome = models.CharField(u'nome', max_length=50)
# 	sigla = models.CharField(u'sigla', max_length=10)
# 	def __unicode__(self):
# 		return self.sigla

# class Vice(models.Model):
# 	nome = models.CharField(u'nome', max_length=150)
# 	nome_urna = models.CharField(u'nome urna', max_length=100)
# 	foto = models.ImageField(upload_to="imagens")
# 	def __unicode__(self):
# 		return self.nome_urna

class Candidato(models.Model):
	CARGO_ESCOLHA = ((PREFEITO, "Prefeito"), (VEREADOR, "Vereador"))
	STATUS_ESCOLHA = ((ATIVO, "ATIVO"), (INATIVO, "INATIVO"))
	PACOTE_ESCOLHA = ((FREE, "FREE"), (LIGHT, "LIGHT"), (PREMIUM, "PREMIUM"))
	PARTIDOS = (("PMDB","PMDB"), ("PTB","PTB"), ("PDT","PDT"), ("PT","PT"), ("DEM","DEM"), ("PCdoB","PCdoB"), ("PSB","PSB"), ("PSDB","PSDB"), ("PTC","PTC"), ("PSC","PSC"), ("PMN","PMN"), ("PRP","PRP"), ("PPS","PPS"), ("PV","PV"), ("PTdoB","PTdoB"), ("PRTB","PRTB"), ("PP","PP"), ("PSTU","PSTU"), ("PCB","PCB"), ("PHS","PHS"), ("PSDC","PSDC"), ("PCO","PCO"), ("PTN","PTN"), ("PSL","PSL"), ("PRB","PRB"), ("PSOL","PSOL"), ("PR","PR"), ("PSD","PSD"), ("PPL","PPL"))

	user = models.ForeignKey(User)
	municipio = models.ForeignKey(Municipio,blank=True)
	pacote = models.CharField(choices=PACOTE_ESCOLHA, default=FREE, max_length=50)
	nome = models.CharField(u'nome', max_length=150,blank=True)
	nome_urna = models.CharField(u'nome urna', max_length=100,blank=True,help_text="Nome que aparecerá no aplicativo")
	partido = models.CharField(choices=PARTIDOS, default="Nenhum", max_length=20)
	foto = models.ImageField(upload_to="imagens",blank=True)
	numero = models.IntegerField(blank=True)
	cargo = models.CharField(choices=CARGO_ESCOLHA, default=VEREADOR, max_length=50)
	coligacao = models.CharField(u'Coligacao', max_length=255,blank=True)
	vice_nome = models.CharField(u'Nome do Vice', max_length=150,blank=True)
	vice_foto = models.ImageField(upload_to="imagens",blank=True)
	informacoes = models.TextField(u'informacoes',blank=True)
	propostas = models.TextField(u'propostas',blank=True)
	status = models.IntegerField(choices=STATUS_ESCOLHA, default=INATIVO)
	criado_em = models.DateTimeField(auto_now=True)
	prioridade = models.IntegerField(default=1000)
	def __unicode__(self):
		return self.nome_urna
	class Meta:
		verbose_name_plural = "Candidato"

class Pergunta(models.Model):
	STATUS_ESCOLHA = ((ATIVO, "Publicado"), (INATIVO, "Nao Publicado"))

	usuario = models.CharField(u'Usuario', max_length=100)
	candidato = models.ForeignKey(Candidato)
	pergunta = models.TextField(u'pergunta')
	data_pergunta = models.DateTimeField(auto_now=True)
	resposta = models.TextField(u'resposta')
	data_resposta = models.DateTimeField()
	status = models.IntegerField(choices=STATUS_ESCOLHA, default=INATIVO)
	def __unicode__(self):
		return self.pergunta

class Voto(models.Model):
	usuario = models.CharField(u'usuario', max_length=50)
	prefeito = models.ForeignKey(Candidato, related_name="prefeito")
	vereador = models.ForeignKey(Candidato,related_name="vereador")
	data = models.DateTimeField(auto_now=True)
	def __unicode__(self):
		return self.prefeito.nome_urna + " | " + self.vereador.nome_urna

class UsuarioCidade(models.Model):
	usuario = models.CharField(u'usuario', max_length=50)
	municipio = models.ForeignKey(Municipio)

class Video(models.Model):
	candidato = models.ForeignKey(Candidato)
	titulo = models.CharField(u'Titulo', max_length=150)
	link = models.CharField(u'Link', max_length=255)
	data = models.DateTimeField(auto_now=True)
	def __unicode__(self):
		return self.candidato.nome_urna + " | " + self.titulo