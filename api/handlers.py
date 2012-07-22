from piston.handler import BaseHandler
import json
from aplicativo.models import Candidato, Municipio
from django.contrib.auth.models import User, Group
from django.contrib.auth.hashers import make_password

class MunicipioHandler(BaseHandler):
	allowed_methods = ("GET",)
	model = Municipio
	fields = ("id", "nome")

	def read(self, request, sigla="PE"):
		municipios = Municipio.objects.filter(estado_sigla=sigla.upper())
		return municipios

class CandidatoHandler(BaseHandler):

	allowed_methods = ("POST",)
	model = Candidato

	def create(self, request):

		# ip = request.META['REMOTE_ADDR']

		# if ip == "189.70.202.76":		

		# FUNCIONANDO
		# user = User()
		# user.username = 'teste'
		# user.first_name = 'teste'
		# user.last_name = 'teste'
		# user.email = 'teste@teste.com'
		# user.password = make_password('123')
		# user.is_staff = True
		# user.is_active = True
		# user.is_superuser = False
		# user.save()
		# grupo = Group.objects.get(pk=1)
		# user.groups.add(grupo)
		# user.save()

		user = User.objects.get(pk=19)
		municipio = Municipio.objects.get(pk=1)
		candidato = Candidato()
		candidato.user(user)
		candidato.municipio(municipio)	
		# candidato.pacote = "PREMIUM"
		# candidato.nome = "nome"
		candidato.nome_urna = "nome urna"
		# candidato.numero = 123
		# candidato.prioridade = 1
		candidato.save()


		return json.dumps({'retorno' : 'sucesso'})


			# try:
			# 	attrs = self.flatten_dict(request.POST)
			# 	candidato = Produto.objects.get(pk=attrs['cod_produto_venda'])
			# 	if int(attrs['quantidade_produto_venda']) <= produto.quantidade_produto:
			# 		produto.quantidade_produto -= int(attrs['quantidade_produto_venda'])
			# 		produto.save()
			# 	else:
			# 		return json.dumps({'retorno' : 'A quantidade escolhida superou a disponibilidade.'})

			# 	venda = Venda(cod_produto_venda=produto,
			# 				quantidade_produto_venda=attrs['quantidade_produto_venda'],
			# 				valor_venda=attrs['valor_venda'],
			# 				online='sim')
			# 	venda.save()

			# 	return json.dumps({'retorno' : 'sucesso'})
			# except:
			# 	return json.dumps({'retorno' : 'fail'})

		# else:
		# 	return 'Sem Permissao de acesso!'


