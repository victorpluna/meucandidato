# -*- coding: utf-8 -*-
from django.contrib import admin
from aplicativo.models import Municipio,Candidato,Voto,Pergunta,Video


class Admin(admin.ModelAdmin):
	def queryset(self, request):
		query = super(Admin, self).queryset(request)
		if request.user.is_superuser:
			return query
		return query.filter(user=request.user)

class AdminFilter(admin.ModelAdmin):
	exclude = ('candidato',)	
	list_display = ('titulo_or_pergunta', 'candidato')

	def queryset(self, request):
		query = super(AdminFilter, self).queryset(request)
		if request.user.is_superuser:
			return query
		return query.filter(candidato__user=request.user)

	def save_model(self, request, obj, form, change):
		candidato = Candidato.objects.get(user=request.user)	
		obj.candidato = candidato
		obj.save()

	def titulo_or_pergunta(self, obj):
		try:
			return obj.titulo
		except:
			return obj.pergunta
	titulo_or_pergunta.short_description = 'Título'



admin.site.register(Municipio)
admin.site.register(Candidato, Admin)
admin.site.register(Voto)
admin.site.register(Pergunta, AdminFilter)
admin.site.register(Video, AdminFilter)