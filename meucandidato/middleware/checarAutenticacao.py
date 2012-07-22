from django.shortcuts import render,get_list_or_404
from django.http import HttpResponse
from aplicativo.models import UsuarioCidade,Municipio

class checarAutenticacao(object):

	def process_view(self, request, view_func, view_args, view_kwargs):
		print request.facebook
		if getattr(view_func, 'has_user', False):
			if request.facebook.user:
				if UsuarioCidade.objects.filter(usuario=request.facebook.user.facebook_id):
					return None				
				else:
					municipios = get_list_or_404(Municipio, estado=17)

					context = {}
					context['municipios'] = municipios
					return render(request, 'escolha_cidade.html', context)
					
