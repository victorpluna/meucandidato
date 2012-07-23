# -*- coding: utf-8 -*-
from aplicativo.models import Candidato,Pergunta,UsuarioCidade,Municipio
from django.shortcuts import render,get_list_or_404, get_object_or_404
from aplicativo.decorators import tem_cidade
from django.http import HttpResponseRedirect, HttpResponse
from fandjango.decorators import facebook_authorization_required
from django.template.defaultfilters import title, escape, force_escape, escapejs
from django.core.urlresolvers import reverse

@tem_cidade
@facebook_authorization_required
def app_home(request):
	# try:
		try:
			usuarioCidade = UsuarioCidade.objects.get( usuario=request.facebook.user.facebook_id)
			municipio = usuarioCidade.municipio
		except:
			municipio = Municipio.objects.get(pk=17)
		prefeitos = Candidato.objects.filter(cargo="Prefeito", municipio=municipio)
		vereadores = Candidato.objects.filter(cargo="Vereador", municipio=municipio)

		jsonPrefeitos = '['
		for item in prefeitos:
			jsonPrefeitos += u"{label: '%s', value: '%s', image: '%s'}," % (item.nome, item.nome, item.foto)
		jsonPrefeitos = jsonPrefeitos[:len(jsonPrefeitos)-1] + "]"

		jsonVereadores = '['
		for item in vereadores:
			jsonVereadores += u"{label: '%s', value: '%s', image: '%s'}," % (item.nome, item.nome, item.foto)
		jsonVereadores = jsonVereadores[:len(jsonVereadores)-1] + "]"

		context = {}
		context['prefeitos'] = prefeitos
		context['vereadores'] = vereadores
		context['jsonPrefeitos'] = jsonPrefeitos
		context['jsonVereadores'] = jsonVereadores
		context['municipio'] = municipio
		return render(request, 'app.html', context)
	# except:
	# 	return HttpResponseRedirect(reverse(app_home))
	
	


def candidato_interna(request, candidato_id):
	
	try:
		candidato = get_object_or_404(Candidato, pk=candidato_id)
		perguntas = Pergunta.objects.filter(candidato_id=candidato_id)	
		context = {}
		context['candidato'] = candidato
		context['perguntas'] = perguntas

		prefeitos = Candidato.objects.filter(cargo="Prefeito")
		vereadores = Candidato.objects.filter(cargo="Vereador")

		jsonPrefeitos = '['
		for item in prefeitos:
			jsonPrefeitos += u"{label: '%s', value: '%s', image: '%s'}," % (item.nome, item.nome, item.foto)
		jsonPrefeitos = jsonPrefeitos[:len(jsonPrefeitos)-1] + "]"

		jsonVereadores = '['
		for item in vereadores:
			jsonVereadores += u"{label: '%s', value: '%s', image: '%s'}," % (item.nome, item.nome, item.foto)
		jsonVereadores = jsonVereadores[:len(jsonVereadores)-1] + "]"

		context['jsonPrefeitos'] = jsonPrefeitos
		context['jsonVereadores'] = jsonVereadores

		return render(request, 'candidato_interna.html', context)
	except:
		return HttpResponseRedirect("/app/")

@facebook_authorization_required
def escolher_municipio(request, municipio):
	municipio_object = get_object_or_404(Municipio, pk=municipio)
	try:
		usuarioCidade = UsuarioCidade.objects.get( usuario=request.facebook.user.facebook_id)
		usuarioCidade.municipio = municipio_object
		usuarioCidade.save()
	except:
		usuarioCidade = UsuarioCidade()
		usuarioCidade.usuario = request.facebook.user.facebook_id
		usuarioCidade.municipio = municipio_object
		usuarioCidade.save()

	return HttpResponseRedirect("/app/")


@facebook_authorization_required
def mostrar_municipios(request):
	return render(request, 'escolha_cidade.html', {})